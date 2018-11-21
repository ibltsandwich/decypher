class AddIndexSongs < ActiveRecord::Migration[5.2]
  def change
    add_index :songs, [:artist_id, :title], unique: true
    add_index :songs, [:album_id, :title], unique: true
  end
end
