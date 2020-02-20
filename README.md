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


### Association
- has_many :posts
- has_many :grop_users
- has_many :groups, through: :group_users

## postsテーブル

|Column|Type|Options|
|------|----|-------|
| text | text ||
| image | text ||
| user_id | integer | null: false, foreign_key: true|
| group_id | integer | null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
| name | string | null: false |

### Association

- has_many :posts
- has_many :group_users
- has_many :users, through: :group_users

## group_usersテーブル

|Column|Type|Options|
|------|----|-------|
| group_id | integer | null: false, foreign_key: true|
| user_id | integer | null: false, foreign_key: true|

- belongs_to :group
- belongs_to :user
* ...