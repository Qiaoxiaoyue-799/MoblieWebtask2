import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Api extends Component {
    render() {
        return (
            <div>
                <div className="apiall">
                    <div className="apileft">
                        <div className="start">
                            <Link to='/home'>主页</Link>
                            <span>/API</span>
                        </div>
                        <div className="apii1">
                            <div className="api1">
                                <p>以下 api 路径均以</p>
                                <a href="https://cnodejs.org/api/v1">
                                https://cnodejs.org/api/v1
                                </a>
                                <p>为前缀</p>
                            </div>
                            <div className="api1">
                                <p>update 2019-03-21: 涉及发帖和发评论的接口都已经下线了，太多人为了测试客户端乱发帖了。</p>
                            </div>
                            <div className="api11">
                                <p>主题</p>
                            </div>
                            <div className="api111">
                                <p>get /topics 主题首页</p>
                            </div>
                            <div className="api12">
                                <p>接收get参数</p>
                                <ul>
                                    <li>
                                    page Number 页数
                                    </li>
                                    <li>
                                    tab String 主题分类。目前有 ask share job good
                                    </li>
                                    <li>
                                    limit Number 每一页的主题数量
                                    </li>
                                    <li>
                                    mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。
                                    </li>
                                </ul>
                                <p>示例：<a href="/api/v1/topics">/api/v1/topics</a></p>
                            </div>
                            <div className="api111">
                                <p>get /topics:id 主题详情</p>
                            </div>
                            <div className="api12">
                                <p>接收get参数</p>
                                <ul>
                                    <li>
                                    mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。
                                    </li>
                                    <li>
                                    accesstoken String 当需要知道一个主题是否被特定用户收藏以及对应评论是否被特定用户点赞时，才需要带此参数。会影响返回值中的 is_collect 以及 replies 列表中的 is_uped 值。
                                    </li>
                                </ul>
                                <p id="shilip">示例：<a href="/api/v1/topic/5433d5e4e737cbe96dcef312">/api/v1/topic/5433d5e4e737cbe96dcef312</a></p>
                            </div>
                        </div>
                        <div className="apii2">
                            <div className="api11">
                                <p>主题收藏</p>
                            </div>
                            <div className="api111">
                                <p>post /topic_collect/collect 收藏主题</p>
                            </div>
                            <div className="api13">
                                <p>接收post参数</p>
                                <ul>
                                    <li>
                                    accesstoken String 用户的 accessToken
                                    </li>
                                    <li>
                                    topic_id String 主题的id
                                    </li>
                                </ul>
                                <p>返回值示例</p>
                                <div id="exk">
                                    <code>
                                        <span>"success":true</span>
                                    </code>
                                </div>
                            </div>
                            <div className="api111">
                                <p>post /topic_collect/de_collect 取消主题</p>
                            </div>
                            <div className="api13">
                                <p>接收post参数</p>
                                <ul>
                                    <li>
                                    accesstoken String 用户的 accessToken
                                    </li>
                                    <li>
                                    topic_id String 主题的id
                                    </li>
                                </ul>
                                <p>返回值示例</p>
                                <div id="exk">
                                    <code>
                                        <span>success:true</span>
                                    </code>
                                </div>
                            </div>
                            <div className="api111">
                                <p>get /topic_collect/:loginname 用户所收藏的主题</p>
                            </div>
                            <div className="api14">
                                <p>示例：<a href="/api/v1/topic/5433d5e4e737cbe96dcef312">/api/v1/topic/5433d5e4e737cbe96dcef312</a></p>                            
                            </div>
                        </div> 
                        <div className="apii3"> 
                            <div className="api11">
                                <p>用户</p>
                            </div>
                            <div className="api111">
                                <p>get /user/:loginname 用户详情</p>
                            </div>
                            <div className="api14">
                                <p>示例：<a href="/api/v1/user/alsotang">/api/v1/user/alsotang</a></p>                            
                            </div>
                            <div className="api111">
                                <p>post /accesstoken 验证 accessToken 的正确性</p>
                            </div>
                            <div className="api13">
                                <p>接收post参数</p>
                                <ul>
                                    <li>
                                    accesstoken String 用户的 accessToken
                                    </li>
                                </ul>
                                <p>如果成功匹配上用户，返回成功信息。否则 403。</p>
                                <p>返回值示例</p>
                                <div id="exk">
                                    <code>
                                        <span>success: true, loginname: req.user.loginname, id: req.user.id, avatar_url: req.user.avatar_url</span>
                                    </code>
                                </div>
                            </div>
                        </div>
                        <div className="apii4">
                            <div className="api11">
                                <p>消息通知</p>
                            </div>
                            <div className="api111">
                                <p>get /message/count 获取未读消息数</p>
                            </div>
                            <div className="api13">
                                <p>接收get参数</p>
                                <ul>
                                    <li>
                                        accesstoken String
                                    </li>
                                </ul>
                                <p>返回值示例</p>
                                <div id="exk">
                                    <code>
                                        <span>data:3</span>
                                    </code>
                                </div>
                            </div>
                            <div className="api111">
                                <p>get /messages 获取已读和未读消息</p>
                            </div>
                            <div className="api13">
                                <p>接收get参数</p>
                                <ul>
                                    <li>
                                        accesstoken String
                                    </li>
                                    <li>
                                    mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。
                                    </li>
                                </ul>
                            </div>
                            <div className="api111">
                                <p>post /message/mark_all 标记全部已读</p>
                            </div>
                            <div className="api13">
                                <p>接收post参数</p>
                                <ul>
                                    <li>
                                        accesstoken String
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="apii5">
                            <div className="api11">
                                <p>知识点</p>
                            </div>
                            <p id="apii5p">
                            如何获取 accessToken？ 用户登录后，在设置页面可以看到自己的 accessToken。 建议各移动端应用使用手机扫码的形式登录，验证使用 /accesstoken 接口，登录后长期保存 accessToken。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
