require 'rails_helper'
RSpec.describe Message, type: :model do
  describe '#create' do
    context 'can save' do
      it "メッセージがあれば保存できる" do
      message = build(:message,image:"")
      expect(message).to be_valid
      end

      it "画像があれば保存できる" do
        message = build(:message, content:"")
        expect(message).to be_valid
      end

      it "メッセージと画像があれば保存できる" do
        message = build(:message)
        expect(message).to be_valid
      end
    end

    context 'can not save' do
      it "メッセージも画像もないと保存できない" do
        message = build(:message, content:"", image:"")
        message.valid?
        expect(message.errors[:content]).to include("を入力してください")
      end

      it "group_idがないと保存できない" do
        message = build(:message, group_id: "")
        message.valid?
        expect(message.errors[:group]).to include("を入力してください")
      end

      it "user_idがないと保存できない" do
        message = build(:message, user_id:"")
        message.valid?
        expect(message.errors[:user]).to include("を入力してください")
      end
    end
  end
end