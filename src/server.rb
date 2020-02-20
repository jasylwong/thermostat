require 'sinatra'

# set :public_folder, proc { File.join(root) }

get '/time' do
  headers 'Access-Control-Allow-Origin' => '*'
  Time.now.to_s
end
