# == Schema Information
#
# Table name: albums
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#

class Album < ApplicationRecord
  validates :title, :artist_id, presence: true

  belongs_to :user

  belongs_to :artist,
    class_name: :Artist

  has_many :songs,
    class_name: :Song
end
