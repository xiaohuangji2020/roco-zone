/**
 * 错误服务 - 处理错误报告的业务逻辑
 */

import axios from 'axios';
import type { ErrorData } from '../../types/error/ErrorData.d.ts';

/**
 * 格式化对象为多行文本，处理嵌套对象
 * @returns {string} - 格式化后的文本
 */
function formatObjectToText(obj: ErrorData, indent = 2): string {
  if (!obj || typeof obj !== 'object') {
    return String(obj);
  }
  
  const spaces = ' '.repeat(indent);
  
  return Object.entries(obj)
    .map(([key, value]) => {
      if (value === null) {
        return `${spaces}${key}: null`;
      } else if (typeof value === 'object') {
        // 递归处理嵌套对象，增加缩进
        const nestedValue = formatObjectToText(value, indent + 2);
        return `${spaces}${key}:\n${nestedValue}`;
      } else {
        return `${spaces}${key}: ${value}`;
      }
    })
    .join('\n');
}

/**
 * 记录错误信息
 */
async function logError(errorData: ErrorData) {
  // 这里是业务逻辑
  // 例如: 
  // 1. 验证数据
  // 2. 存储到数据库
  // 3. 发送通知
  // 4. 进行统计分析
  
  console.log('记录错误信息:', errorData);
  
  // 格式化错误信息
  const errorContent = `错误消息
发生时间: ${errorData.time || new Date().toLocaleString()}
页面地址: ${errorData.href}
用户信息: ${errorData.user.id}-${errorData.user.name}-${errorData.user.phone}
IP地址: ${errorData.ip}
浏览器信息: ${errorData.userAgent}
appName: ${errorData.appName}
其他信息: ${errorData.errorInfo ? '\n' + formatObjectToText(errorData.errorInfo) : '无'}`;
  
  // 调用企业微信webhook
  try {
    const webhookUrl = 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=e78a1f67-4200-4bf5-ac4d-997b599cd521';
    const response = await axios.post(webhookUrl, {
      msgtype: 'text',
      text: {
        content: errorContent
      }
    });
    console.log('错误通知已发送到企业微信', response.data);
  } catch (error) {
    console.error('发送错误通知到企业微信失败:', error);
  }
  
  // 模拟异步处理
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 0,
        info: '错误已记录',
        msg: 'success',
        timestamp: new Date(),
      });
    }, 100);
  });
}

export { logError }; 