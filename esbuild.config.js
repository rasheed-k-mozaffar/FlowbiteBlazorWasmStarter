import autoprefixer from "autoprefixer";
import esbuild from "esbuild";
import fs from "fs-extra";
import {sassPlugin} from "esbuild-sass-plugin";
import path from "path";
import postcss from "postcss";
import tailwindcss from "tailwindcss";

const sourceRoot = path.join("wwwroot", "scss");
const destRoot = path.join("wwwroot", "css");

async function buildStyles() {
    const sourceFilePath = path.join(sourceRoot, "app.scss");
    const destFilePath = path.join(destRoot, "app.css");

    // Build style.css and associated image and font files.
    await esbuild.build({
        logLevel: "debug",
        metafile: true,
        entryPoints: [
            sourceFilePath,
        ],
        outfile: destFilePath,
        allowOverwrite: true,
        bundle: true,
        plugins: [
            sassPlugin({
                async transform(source) {
                    const {css} =
                        await postcss([tailwindcss, autoprefixer]).process(source, {from: undefined});

                    return css;
                },
            }),
        ],
        loader: {
            ".eot": "file",
            ".gif": "file",
            ".html": "file",
            ".jpg": "file",
            ".jpeg": "file",
            ".png": "file",
            ".ttf": "file",
            ".svg": "file",
            ".woff": "file",
            ".woff2": "file",
        },
    });

    console.log(`⚡ Compiled ${sourceFilePath} to ${destFilePath} ⚡`);
}

async function copyFlowbiteLibs() {
    const sourceFolderPath = path.join("node_modules", "flowbite", "dist")
    const destFolderPath = path.join("wwwroot", "lib", "flowbite")

    // Ensure the source folder exists.
    const flowbiteInstalled = await fs.pathExists(sourceFolderPath);
    if (!flowbiteInstalled) {
        throw new Error(`Folder '${sourceFolderPath}' does not exist, meaning 'flowbite' is not installed`);
    }

    // Ensure the destination folder exists.
    fs.ensureDir(destFolderPath);

    // Copy minified and non-minified versions with maps for debugging.
    const fileNames = ["flowbite.js", "flowbite.js.map", "flowbite.min.js", "flowbite.min.js.map"];

    for (const fileName of fileNames) {
        const sourceFilePath = path.join(sourceFolderPath, fileName);
        const destFilePath = path.join(destFolderPath, fileName);

        // If the sourcePath does not exist, we will fail the build.
        await fs.copy(sourceFilePath, destFilePath);
    }

    console.log(`⚡ Copied flowbite libs from ${sourceFolderPath} to ${destFolderPath} ⚡`);
}

try {
    await buildStyles();
    await copyFlowbiteLibs();
} catch (err) {
    console.error("Build failed:", err);
    process.exit(1);
}
