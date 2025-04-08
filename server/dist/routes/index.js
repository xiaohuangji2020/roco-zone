var __rewriteRelativeImportExtension = (this && this.__rewriteRelativeImportExtension) || function (path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
        });
    }
    return path;
};
/**
 * 路由注册中心 - 自动加载和注册所有路由
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Router from 'koa-router';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = new Router();
// 基础路由
router.get('/', async (ctx) => {
    ctx.body = {
        message: 'feng_admin_node'
    };
});
// 自动加载routes目录下的所有路由文件（除了index.js）
const files = fs.readdirSync(__dirname);
for (const file of files) {
    // 排除当前文件和非.js文件
    if (file !== 'index.ts' && file.endsWith('.ts')) {
        console.log(`加载路由: ${file}`);
        const routePath = path.join(__dirname, file);
        const route = await import(__rewriteRelativeImportExtension(routePath));
        // 注册路由
        router.use(route.default.routes());
    }
}
export default router;
