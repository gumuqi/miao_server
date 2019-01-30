项目表
id              主键 自增长
name            项目名称
status          项目状态 0:：招募中，1：开发中，2：已结束
price           项目报价
technology      技术要求
duration        项目周期(天)
description     项目描述
create_time     发布时间
user_id         项目创建者

创建语句：
CREATE TABLE `project` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT '',
  `status` int(1) DEFAULT 0,
  `price` int(6) DEFAULT 0,
  `technology` varchar(200) DEFAULT '',
  `duration` int(3) DEFAULT 1,
  `create_time` varchar(200) DEFAULT NULL,
  `user_id` datetime DEFAULT NULL,
  `description` varchar(1000) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


用户表，该表主要存储用户个人信息
id              主键
userid          用户id
nickname        昵称
gender          性别，0表示未知，1表示男，2表示女
goot_at         擅长
description     简介
works_info      作品展示
register_time   注册时间
contact_info    联系方式

创建语句：
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(20) DEFAULT NULL,
  `nickname` varchar(200) DEFAULT '',
  `avatarUrl` varchar(255) DEFAULT '',
  `gender` varchar(2) DEFAULT '男',
  `good_at` varchar(20) DEFAULT '',
  `description` varchar(500) DEFAULT '',
  `works_info` varchar(1000) DEFAULT '',
  `register_time` datetime DEFAULT NULL,
  `contact_info` varchar(100) DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;


评论表，需求方可以通过开发人员的评论中得出他是否靠谱
开发人员也可以根据往期被的开发者对需求方的评论中决定要不要接这个项目
id                  主键
comment_cont        评论内容
becomment_userid    被评论者id
comment_userid      评论者id
comment_score       评分
create_time         评论时间

创建语句：
CREATE TABLE `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comment_cont` text,
  `becomment_userid` varchar(20) DEFAULT NULL,
  `comment_userid` varchar(20) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

投递表：投递项目的开发者与项目多对多的关系
id                  主键
project_id          项目id
user_id             投递者id
CREATE TABLE `delivery` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `project_id` varchar(10) DEFAULT NULL,
  `user_id` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;