
function getFirstBadRevision(revisions, high, low) {
    var n = revisions.length,
        mid = Math.floor((high + low)/2),
        i;

    if(low > high) {

        return -1;
    } else {
        if (isBad(mid) && ((mid === low) || !isBad(mid-1))) {
            return mid;
        } else if(isBad(mid) && isBad(mid-1)) {
            return getFirstBadRevision(revisions, mid-1, low);
        } else {
            return getFirstBadRevision(revisions, high, mid+1);
        }
    }
}

function findFirst(revisions) {
    return getFirstBadRevision(revisions, revisions.length, 0);
}