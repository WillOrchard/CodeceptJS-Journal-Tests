class ChangeEntriesUserIdNullable < ActiveRecord::Migration[6.1]
  def change
    change_column_null :entries, :user_id, true
  end
end
