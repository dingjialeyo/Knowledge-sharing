// 求整数划分
    p = (n, m) => {       // n为划分数  m为最大加数
    if (n == 1 || m == 1) {
        return 1;
    } else if (n == m) {
        return 1 + p(n, n - 1);
    }
    return n < m ? p(n, n) : p(n, m - 1) + p(n - m, m);
}
console.log(p(6, 2)) // 4
console.log(p(8, 8)) // 22

// 小明岁数问题
    function Xiaoming(num) {         // num是哥哥的人数
        return num == 0 ? 28 : Xiaoming(num-1)-2
    }
    console.log("小明"+Xiaoming(5)+"岁");     // 18