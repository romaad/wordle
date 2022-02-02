# import json
# out = set()
# with open("arabic-wordlist-1.6.txt", "r") as fo:
#     for line in fo.readlines():
#         line = line.strip()
#         if len(line) == 5:
#             out.add(line)


# with open("out-arabic.txt", "w") as out_file:
#     out_file.write(json.dumps(list(out), indent = 4, sort_keys=True, ensure_ascii=False))



import json
import unicodedata

alef = ['آ', 'إ', 'أ']

def easify(word):
    strout = ""
    for ch in word:
        if ch in alef:
            ch = 'ا'
        strout = strout + ch
    return strout

def is_arabic(word):
    for ch in word:
        name = unicodedata.name(ch).lower()
        if not 'arabic' in name:
            return False
    return True

out = set()
out_guess = set()
dico = set()
with open("ar_50k.txt", "r") as fo:
    for line in fo.readlines():
        [word, freq] = line.split()
        freq = int(freq)
        dico.add(word)
        if len(word) == 5 and is_arabic(word):
            out_guess.add(easify(word))
            if freq > 500 and word[0:2] != "ال":
                out.add(word)

for word in list(out):
    if word[1:] in dico or word[2:] in dico:
        out.remove(word)

with open("arabic-wordlist-1.6.txt", "r") as fo:
    for line in fo.readlines():
        line = line.strip()
        if len(line) == 5:
            out_guess.add(line)

with open("wordlist_AR.ts", "w") as out_file:
    outstr = json.dumps(list(out), indent = 4, sort_keys=True, ensure_ascii=False)
    outstr = "export const WORDS_AR = \n" + outstr 
    out_file.write(outstr)

with open("validGuesses_AR.ts", "w") as out_file:
    outstr = json.dumps(list(out_guess), indent = 4, sort_keys=True, ensure_ascii=False)
    outstr = "export const VALIDGUESSES_AR = \n" + outstr 
    out_file.write(outstr)
    