class AddPhotosToSongs < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :photo_url, :text
    add_column :albums, :photo_url, :text
  end
end
