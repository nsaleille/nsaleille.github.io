from os import walk
directory = "public/img/gallery"
f = []
for (dirpath, dirnames, filenames) in walk(directory):
	if filenames != [".DS_Store"]:
		if "large" in dirpath:
			print dirpath
			f.extend([{"post" : "#" + dirpath[19:-6], "url": {"large": "../"+ dirpath + '/', "small" : "../"+ dirpath[:-5] + 'small/'}, "file": name} for name in filenames if (name != ".DS_Store")])

import json
with open('images.json', 'w') as outfile:
    json.dump(f, outfile)