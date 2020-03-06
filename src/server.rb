require 'sinatra'

get '/' do
  send_file 'thermostat.html'
end

get '/time' do
  headers 'Access-Control-Allow-Origin' => '*'
  Time.now.to_s
end

get '/temperature' do
  $save_temp
end

post '/temperature' do
  p 'post request received'
  send_file 'thermostat.html'
  $save_temp = save_temp
end
