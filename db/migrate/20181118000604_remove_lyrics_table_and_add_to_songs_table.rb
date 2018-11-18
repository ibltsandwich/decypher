class RemoveLyricsTableAndAddToSongsTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :lyrics
    add_column :songs, :lyrics, :string
  end
end
