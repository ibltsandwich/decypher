# == Schema Information
#
# Table name: lyrics
#
#  id         :bigint(8)        not null, primary key
#  body       :string           not null
#  song_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Lyric < ApplicationRecord
  validates :body, :song_id, presence: true

  belongs_to :song,
    class_name: :Song

end
