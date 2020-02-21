require 'sinatra'

get '/time' do
  headers 'Access-Control-Allow-Origin' => '*'
  Time.now.to_s
end

get '/temperature' do

end

post '/temperature' do
  
end
