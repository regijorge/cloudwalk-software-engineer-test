const { program } = require('commander')

const downloadLogsCommand = require('../../interfaces/cli/commands/downloadLogsCommand')
const parseLogsCommand = require('../../interfaces/cli/commands/parseLogsCommand')
const generateReportCommand = require('../../interfaces/cli/commands/generateReportCommand')

program
  .command('download-logs')
  .description('Download logs from the server')
  .action(downloadLogsCommand)

program
  .command('parse-logs')
  .description('Parse downloaded logs')
  .action(parseLogsCommand)

program
  .command('generate-report')
  .description('Generate a report based on parsed logs')
  .option('-m, --matchId <matchId>', 'Match identifier skip for all', null)
  .option('-r, --reportType <reportType>', 'Report type: kill or death', 'kill')
  .option('-s, --sortBy <sortBy>', 'Sort by: kills, deaths, or score', 'score')
  .action(generateReportCommand)

program.parse(process.argv)