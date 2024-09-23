function f(x, y) {
    if(x % 2 == 0 && y % 2 == 0)      { return x * y; }
    else if(x % 2 != 0 && y % 2 != 0) { return x + y; }
    return x % 2 == 0 ? y : x;
}

function is_rectangle(x1, y1, x2, y2, x3, y3, x4, y4){
    if(x1 == x4 && y1 == y2 && x2 == x3 && y3 == y4){
        return true;
    }
    return false;
}