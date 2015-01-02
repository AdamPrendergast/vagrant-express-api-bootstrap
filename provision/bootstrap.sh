# Install Mocha and test suite
cd /vagrant
sudo npm install -g mocha
sudo npm install --save-dev chai sinon mockery

# Bootstrap App
cd /vagrant/app
sudo npm install