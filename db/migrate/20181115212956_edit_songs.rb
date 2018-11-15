class EditSongs < ActiveRecord::Migration[5.2]
  def change
    change_column_null :songs, :album_id, true
  end
end
