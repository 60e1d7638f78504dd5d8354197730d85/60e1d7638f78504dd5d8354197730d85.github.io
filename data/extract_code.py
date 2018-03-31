#!/usr/bin/env python

import os
import sys

import json

import MySQLdb
db=MySQLdb.connect(user="user",passwd="password",db="ELAB_DB")

courses = {}

def fetch_code(table):
	user = table[len('std_db_'):]

	c = db.cursor()
	c.execute("select Q_ID, CODE from `%s` where STATUS = 2" % (table,))

	# rows = [c.fetchone()]
	rows = c.fetchall()
	for row in rows:
		q_id = str(row[0])
		code = row[1]

		if q_id is None or code is None:
			continue

		lab = q_id[0:2]

		if lab not in courses.keys():
			print("%s : %s" % (table, q_id))
			continue

		folder = 'code/%s/%s' % (courses[lab], q_id,)
		os.makedirs(folder, exist_ok = True)

		code_filename = os.path.join(folder, ('%s.txt' % user))
		with open(code_filename, 'w') as f:
			f.write(code)

def write_json():
	courses = next(os.walk('code'))[1]
	for course in courses:
		questions = next(os.walk(os.path.join('code', course)))[1]
		for question in questions:
			path_f = os.path.join('code', course, question)
			json_f = os.path.join('code', course, ('%s.json' % (question)))
			codes = os.listdir(path_f)
			with open(json_f, 'w') as f:
				f.write(json.dumps({'files': codes}))

def main():
	global courses

	c=db.cursor()

	c.execute("select * from course_table;")
	for row in c.fetchall():
		courses[str(row[0])] = row[1].lower()

	c.execute("select TABLE_NAME from information_schema.tables where TABLE_SCHEMA = 'ELAB_DB' and table_name like 'std_db_%'")

	# rows = [c.fetchone()]
	rows = c.fetchall()
	for row in rows:
		fetch_code(row[0])

	write_json()

main()
