var n = Date.now();
var map = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var x = '';

while(n > 0)
{
x += map[n%62];
n = Math.round(n/62);
}
console.log(x);
