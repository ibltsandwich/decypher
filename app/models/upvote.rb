# == Schema Information
#
# Table name: upvotes
#
#  id              :bigint(8)        not null, primary key
#  user_id         :integer          not null
#  upvoteable_type :string           not null
#  upvoteable_id   :bigint(8)        not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  username        :string
#  vote_type       :string
#

class Upvote < ApplicationRecord
  validates :username, presence: true
  validates :vote_type, presence: true

  belongs_to :user
  belongs_to :upvoteable, polymorphic: true
end
