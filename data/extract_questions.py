#!/usr/bin/env python

# abusive script. beware.

import os
import sys

from lxml import etree
parser = etree.XMLParser(recover=True)

import json

def main():
	if (len(sys.argv) != 2):
		print("wot m8")
		return

	if not sys.argv[1].endswith('.xml'):
		print("fek off")
		return

	root = etree.parse(sys.argv[1], parser).getroot()

	qtables = root.findall("./database[@name='ELAB_DB']/table_data")

	for qtable in qtables:
		name = qtable.attrib['name']
		dirpath = os.path.join( os.getcwd(), name )
		if not os.path.exists(dirpath):
			os.makedirs(dirpath)

		for q in qtable.findall('./row'):
			qj = {}
			for f in q.findall('./field'):
				qj[f.attrib['name']] = f.text

			skip = False
			for x in ['Q_ID', 'S_NAME', 'Q_NAME', 'Q_DESC', 'TESTCASE_1', 'TESTCASE_2', 'TESTCASE_3', 'TESTCASE_4', 'TESTCASE_5']:
				if x not in qj.keys():
					skip = True
					break
			if skip:
				continue

			json_file = os.path.join(dirpath, qj['Q_ID'] + '.json')
			with open(json_file, 'w') as outfile:
				json.dump(qj, outfile)

main()

