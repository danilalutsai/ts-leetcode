// https://leetcode.com/problems/defanging-an-ip-address/

function defangIPaddr(address: string): string {
  return address.replaceAll('.', '[.]');
};

console.log(defangIPaddr("1.1.1.1"));
