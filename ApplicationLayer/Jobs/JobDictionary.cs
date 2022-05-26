using ApplicationLayer.Utility.CreateHtml;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace ApplicationLayer.IRepository.job
{
    public class JobDictionary : CronJobService
    {
       
        private readonly IServiceScopeFactory scopeFactory;

        public IMessageSender _messageSender { get; }
   

        //  public IEnglishWordRepository _englishWordRepository { get; }

        public JobDictionary(IScheduleConfig<JobDictionary> config, 
           
            IServiceScopeFactory scopeFactory,
            IMessageSender messageSender
           )
            : base(config.CronExpression, config.TimeZoneInfo)
        {
           
            this.scopeFactory = scopeFactory;
            _messageSender = messageSender;



        }

        public override System.Threading.Tasks.Task StartAsync(CancellationToken cancellationToken)
        {
           
            return base.StartAsync(cancellationToken);
        }

        public  override async Task DoWork(CancellationToken cancellationToken)
        {
            var _logRepository = scopeFactory.CreateScope().ServiceProvider.GetRequiredService<IlogRepository>();
            try
            {
            //    Domains.Log.LogError log = new Domains.Log.LogError() {
            //        ActionName = "وارد بخش DoWork شده",
            //        Time = DateTime.Now.ToString("HH:mm:ss"),
            //        Date = DateTime.Now
            //};
            //   await _logRepository.Insert(log);

                using (var scope = scopeFactory.CreateScope())
                {
                    //var res1 = scope.ServiceProvider.GetRequiredService<IEnglishWordRepository>();
                    //var result = await res1.Get(null, q => q.OrderBy(x => (x.UnsuccessCount - x.SuccessCount)), "", -1, 30);
                    //var body = result.createHtml();
                    //await _messageSender.SendEmailAsync("esmaeilifarhad@outlook.com", "Dictionary", body, true);
                }


                await System.Threading.Tasks.Task.CompletedTask;

                Domains.Log.LogError log2 = new Domains.Log.LogError()
                {
                    ActionName = "Job Executed ",
                    Time = DateTime.Now.ToString("HH:mm:ss"),
                    Date = DateTime.Now
                };
                await _logRepository.Insert(log2);
            }
            catch (Exception ex)
            {
                Domains.Log.LogError log = new Domains.Log.LogError()
                {
                    ActionName = "Error",
                    Execption = ex.ToString(),
                    InnnerExeption = (ex.InnerException == null ? "":ex.InnerException.ToString()),
                    Time = DateTime.Now.ToString("HH:mm:ss"),
                    Date = DateTime.Now
                };
              await  _logRepository.Insert(log);
                throw;
            }
           
           // return res;
        }

        public override System.Threading.Tasks.Task StopAsync(CancellationToken cancellationToken)
        {
           
            return base.StopAsync(cancellationToken);
        }
    }
}
