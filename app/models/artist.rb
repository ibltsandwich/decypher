# == Schema Information
#
# Table name: artists
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#

class Artist < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  belongs_to :user
  
  has_many :albums,
    class_name: :Album

  has_many :songs,
    class_name: :Song
end
