/**
 独立封装一个js文件对首页内容的所有网络请求进行集中式管理*/
import {request} from "@/network/request";

export function getHomeMultiData() {
  return request({
    url: '/home/multidata',
  })
}
