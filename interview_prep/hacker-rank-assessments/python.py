def strings_xor(s, t):
	res = ""
  for i in range(len(s)):
    if s[i] == t[i]:
      res += '0'
      else:
        res += '1'
        return res
string res = "";
for(int i = 0; i < s.size(); i++) {
    if(s[i] == t[i])
        res += '0';
    else
        res += '1';
}

return res;