/**
 * Bounding Box Class
 * Chris' code for bounding box
 */
 class BoundingBox {
    constructor(x, y, width, height) {
        Object.assign(this, { x, y, width, height });

        // dimensions for the current entity
        this.left = x;
        this.top = y;
        this.right = this.left + this.width;
        this.bottom = this.top + this.height;
    };

    /**
     * collide function
     * @param {*} oth  is the other entity
     * @returns whether or not the two entities collide
     */
    collide(oth) {
        if (this.right > oth.left && this.left < oth.right && this.top < oth.bottom && this.bottom > oth.top) return true;
        return false;
    };

    withinRange(oth) {
        if (this.right + 10 > oth.left  && this.left  < oth.right + 10 && this.top - 10 < oth.bottom  && this.bottom + 10 > oth.top) return true;
        return false;     
    };

    remove() {
        this.left = 0;
        this.top = 0;
        this.right = 0;
        this.bottom = 0;
    }
};