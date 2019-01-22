class AddInfoToArtists < ActiveRecord::Migration[5.2]
  def change
    add_column :artists, :bio, :string
    add_column :artists, :artist_img, :string
  end
end
