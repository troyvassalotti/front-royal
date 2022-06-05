const fg = require("fast-glob");

const galleriesDirectory = "src/photos/";
const globPattern = "**/*.{jpg,JPG,png,jpeg}";

const entries = {
    allDownHillFromHere2015: fg.sync([`all-down-hill-from-here-2015/${globPattern}`], {
        objectMode: true,
        cwd: galleriesDirectory,
    }),
    onImpulse2016: fg.sync([`on-impulse-2016/${globPattern}`], {
        objectMode: true,
        cwd: galleriesDirectory,
    }),
    waverlyBrewing20220211: fg.sync([`waverly-brewing-20220211/${globPattern}`], {
        objectMode: true,
        cwd: galleriesDirectory,
    }),
    everythingElse: fg.sync([`everything-else/${globPattern}`], {
        objectMode: true,
        cwd: galleriesDirectory,
    }),
};

module.exports = entries;
