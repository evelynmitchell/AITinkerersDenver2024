# Comprehensive Node.js Deployment Guide for DigitalOcean

## Table of Contents
1. [Initial Setup and Navigation](#initial-setup-and-navigation)
2. [Installing Essential Tools](#installing-essential-tools)
3. [Installing Docker](#installing-docker)
4. [Setting Up Development Environment](#setting-up-development-environment)
5. [Configuring PM2](#configuring-pm2)
6. [Testing and Further Configuration](#testing-and-further-configuration)
7. [Git Operations](#git-operations)
8. [Running TypeScript](#running-typescript)
9. [Additional Notes](#additional-notes)
10. [Useful Resources](#useful-resources)

## Initial Setup and Navigation

```bash
passwd
exit
passwd
cd ~/
ls
pwd
sudo ls
ls
pwd
node -v
cd ..
git
cd ..
ls
cd ~/
ls
pwd
```

## Installing Essential Tools

```bash
npm install pm2@latest -g
sudo npm install pm2@latest -g
pm2 status
ls
pwd
git clone git@github.com:evelynmitchell/AITinkerersDenver2024.git
git clone https://github.com/evelynmitchell/AITinkerersDenver2024.git
cd AITinkerersDenver2024/
ls
git checkout poc
git checkout main
ls
git checkout origin/poc
ls
cd frontend/
ls
docker
podman
```

## Installing Docker

1. Remove old versions:
   ```bash
   for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done
   ```

2. Add Docker's official GPG key:
   ```bash
   sudo apt-get update
   sudo apt-get install ca-certificates curl
   sudo install -m 0755 -d /etc/apt/keyrings
   sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
   sudo chmod a+r /etc/apt/keyrings/docker.asc
   ```

3. Add the repository to Apt sources:
   ```bash
   echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
   $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
   sudo apt-get update
   ```

4. Install Docker:
   ```bash
   sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
   ```

5. Start and test Docker:
   ```bash
   sudo service docker start
   sudo docker run hello-world
   docker ls
   docker -ps
   docker ps
   sudo docker ps
   ls
   ```

## Setting Up Development Environment

1. Install additional tools:
   ```bash
   sudo apt install zellij
   ```

2. Set up the project:
   ```bash
   nvim
   ls
   npm ci
   ```

3. Run the development server:
   ```bash
   npm run dev
   npm run dev -- -p 8080
   ```

## Configuring PM2

```bash
pm2 startup
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u akhile76 --hp /home/akhile76
pm2 start "npm run dev -- -p 8080" --name frontend
pm2 status
pm2 logs
```

## Testing and Further Configuration

1. Test the application:
   ```bash
   curl http://localhost:8080/
   ```

2. Further configuration:
   ```bash
   code .
   exit
   cd
   cd ~/
   ls
   cd AITinkerersDenver2024/
   cd frontend/
   npm run dev -- -p 0.0.0.0:8081
   vim package.json
   npm run dev -- -p 8081 --hostname=0.0.0.0
   nginx
   ```

## Git Operations

```bash
git branch
git status
git checkout poc
git pull
cd frontend/
npm ci
ls
cd cd
pwd
cd examples/
pwd
```

## Running TypeScript

```bash
ts-nodets search.ts
ts-node search.ts
```

## Additional Notes

- When modifying your application, restart it using PM2: `pm2 restart <app-name>`
- To configure Nginx as a reverse proxy:
  1. Edit `/etc/nginx/sites-available/default`
  2. Restart Nginx: `sudo systemctl restart nginx`
- For running multiple apps:
  1. Repeat the deployment steps for each
  2. Use unique ports and PM2 names
- Use `pm2 save` to ensure your apps start on system boot
- View command history: `history`

## Useful Resources

- [PM2 Documentation](https://pm2.keymetrics.io/docs/usage/quick-start/)
- [DigitalOcean Node.js Deployment Guide](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-20-04)
- [Next.js Documentation](https://nextjs.org/docs)

Remember to adjust usernames, paths, and other specifics according to your setup.
