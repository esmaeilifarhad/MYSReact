using ApplicationLayer.IRepository;
using ApplicationLayer.IRepository.job;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationLayer.Jobs
{
  public static  class JobServices
    {
        public static IServiceCollection AddJJobSchadularConfig(this IServiceCollection services)
        {
            //https://www.hostinger.com/tutorials/cron-job
            //https://en.wikipedia.org/wiki/Cron#CRON_expression
            try
            {


                services.AddScoped<IMyScopedService, MyScopedService>();

            services.AddCronJob<JobDictionary>(c =>
            {
                c.TimeZoneInfo = TimeZoneInfo.Local;
              //  c.CronExpression = @"0 8,9,10,11,12,13,14,15,16,17,18 * * *";
                c.CronExpression = "30  12,13,14,15,16,17,18,19,20,21,22 * * *";
            });

            // @"*/1 8,9,10 * * *";    هر نیم دقیقه در ساعت های 8 9 10 اجرا میشود
            // 0 6,18 * * * /bin/sh backup.sh	To perform a database backup twice a day at 6 AM and 6 PM.
            /*
            services.AddCronJob<JobTask>(c =>
            {
                c.TimeZoneInfo = TimeZoneInfo.Local;
                // c.CronExpression = @"44 9 * * *";
                c.CronExpression = @"0 8,11,14,17,20,22 * * *";
            });
            */

            //services.AddCronJob<MyCronJob3>(c =>
            //{
            //    c.TimeZoneInfo = TimeZoneInfo.Local;
            //    c.CronExpression = @"50 12 * * *";
            //});

            return services;
            }
            catch (Exception ex)
            {
              

                throw;
            }
        }

    }
}
