class AddHeaderPhotoToArtists < ActiveRecord::Migration[5.2]
  def change
    add_column :artists, :header_img, :string
  end
end
