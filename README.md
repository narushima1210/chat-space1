+# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions
## usersテーブル

|Column|Type|Options|
|------|----|-------|
| name | string | null: false |
| Email | string | null: false |
| password | string | null: false |
| groups_id | integer | null: false, foreign_key: true|

### Association
- has_many :posts
- belongs_to :group

## postsテーブル

|Column|Type|Options|
|------|----|-------|
| text | string | null: false |
| image | string | null: false |
| user_id | integer | null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
| group_name | string | null: false|

### Association

- has_many :users
- has_many :posts

* ...