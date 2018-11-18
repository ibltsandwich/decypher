class ChangeLyricsColumn < ActiveRecord::Migration[5.2]
  def change
    change_column :songs, :lyrics, :text
  end
end
