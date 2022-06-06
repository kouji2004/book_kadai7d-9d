class CreateAs < ActiveRecord::Migration[6.1]
  def change
    create_table :as do |t|

      t.timestamps
    end
  end
end
