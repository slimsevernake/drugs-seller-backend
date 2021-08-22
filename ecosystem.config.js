module.exports = {
  apps : [{
    script: 'index.js',
    watch: '.',
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      user : 'root',
      host : '185.163.127.161',
      ref  : 'origin/master',
      repo : 'git@github.com:jeancharlescano/drugs-seller-backend.git',
      path : '/var/www/html/drugDealer',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
