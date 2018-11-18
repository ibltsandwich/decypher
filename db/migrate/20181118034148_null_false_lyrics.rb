class NullFalseLyrics < ActiveRecord::Migration[5.2]
  def change
    change_column_null :songs, :lyrics, true
  end
end
