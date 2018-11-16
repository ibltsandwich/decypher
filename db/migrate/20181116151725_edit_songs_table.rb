class EditSongsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :songs, :album_id
    add_column :songs, :album_id, :integer, null: true
  end
end
