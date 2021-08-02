
export const detectBtn = (x, y, button) => {
    const xMax = button.x + button.w;
    const yMax = button.y + button.h;
    if((x > button.x && x < xMax) && (y > button.y && y < yMax)) return true;
    return false;
};