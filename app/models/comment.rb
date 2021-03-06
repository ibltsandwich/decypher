# == Schema Information
#
# Table name: comments
#
#  id               :bigint(8)        not null, primary key
#  body             :string           not null
#  user_id          :integer          not null
#  commentable_type :string           not null
#  commentable_id   :bigint(8)        not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  username         :string
#

class Comment < ApplicationRecord
  validates :body, presence: true
  validates :username, presence: true
  
  belongs_to :user
  belongs_to :commentable, polymorphic: true

  has_many :upvotes, as: :upvoteable
end
