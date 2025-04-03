/**
 * 错误控制器 - 处理错误相关的请求
 */
import { logError } from '../../services/error/errorService.js';

/**
 * 处理错误报告
 * @param {Object} ctx - Koa上下文
 */
async function reportError(ctx) {
  try {
    // 获取请求体数据
    const body = ctx.request.body;
    
    // 调用服务层处理业务逻辑
    const result = await logError(Object.assign({}, body, {
      ip: ctx.request.ip
    }));
    
    // 返回处理结果
    ctx.body = result;
    
  } catch (error) {
    console.error('处理错误报告失败:', error);
    ctx.status = 500;
    ctx.body = { error: '服务器内部错误' };
  }
}

export { reportError }; 