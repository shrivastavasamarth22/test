const sortPoints = (S) => {
    // Select the rightmost lowest point P0 in S
    const P0 = { x: 0, y: 0 };
    // Get the lowest y first
    P0.y = Math.min.apply(null, S.map(p => p.y));
    // Get all the points on that y
    const yPoints = S.filter(p => p.y === P0.y);
    // Get the rightmost point of that y
    P0.x = Math.max.apply(null, yPoints.map(p => p.x));
    // Sort S radially (ccw) with P0 as a center
    S.sort((a, b) => angleCompare(P0, a, b));
    return S;
}

// Use isLeft() comparisons
// For ties, discard the closer points
const angleCompare = (P, A, B) => {
    const left = isLeftCompare(P, A, B);
    if (left === 0) return distCompare(P, A, B);
    return left;
}

// To determine which side of the line A(x1, y1)B(x2, y2)
// a point P(x, y) falls on, the formula is:
// d = (x - x1)(y2 - y1) - (y - y1)(x2 - x1)
// If d < 0 then the point lies on one side of the line
// and if d > 0 then it lies on the other side.
// If d = 0 then the point lies exactly on the line.
const isLeftCompare = (P, A, B) => {
    return (P.x - A.x) * (B.y - A.y) - (P.y - A.y) * (B.x - A.x);
}

// Distance between two points A(x1,y1) and B(x2,y2)
// is given by: d = √((x2 - x1)² + (y2 - y1)²).
// Since we only care about the sign of the outcome
// and not the outcome itself, we don't need to find
// the square roots of the two segments, we can use
// the d² just as fine.
const distCompare = (P, A, B) => {
    const distAP = Math.pow(P.x - A.x, 2) + Math.pow(P.y - A.y, 2);
    const distBP = Math.pow(P.x - B.x, 2) + Math.pow(P.y - B.y, 2);
    return distAP - distBP;
}

export const convexHull = (points) => {
    // Input: a  set of points S = {P = (P.x,P.y)}
    const S = points.splice(0);
    // Let P[N] be the sorted array of points with P[0]=P0
    const P = sortPoints(S);
    // Push P[0] and P[1] onto a stack Ω
    const OMEGA = [];
    OMEGA.push(P[0], P[1]);
    // while i < N
    for (let i = 0, { length } = P; i < length;) {
        // Let PT1 = the top point on Ω
        const PT1 = OMEGA[OMEGA.length - 1];
        // If (PT1 == P[0]) {
        //    Push P[i] onto Ω
        //    increment i
        // }
        if (PT1 === P[0]) {
            OMEGA.push(P[i]);
            i++;
        } else {
            // Let PT2 = the second top point on Ω
            const PT2 = OMEGA[OMEGA.length - 2];
            // If (P[i] is strictly left of the line  PT2 to PT1) {
            //    Push P[i] onto Ω
            //    increment i
            // }
            const PT2isLeft = isLeftCompare(P[i], PT2, PT1);
            if (PT2isLeft < 0) {
                OMEGA.push(P[i]);
                i++;
            } else {
                // Pop the top point PT1 off the stack
                OMEGA.pop();
            }
        }
    }
    return OMEGA;
}