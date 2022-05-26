using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationLayer.Utility.CreateHtml
{
  public static  class CreateHtml
    {
        public static string createHtml(this IEnumerable<Domains.EnglishWord> englishWords) {
            var body = "<table>";
            int i = 0;
            int stylecondition = 0;

            foreach (var item in englishWords)
            {
                stylecondition = i % 2;
                if (stylecondition == 0)
                {
                    body += "<tr style='background-color:gray;color:white'>";
                }
                else
                {
                    body += "<tr style='background-color:white;color:black'>";
                }
               
                body += "<td style='border:1px solid'>" + item.English + "</td><td style='border:1px solid;text-align:right'>" + item.Persian + "</td>";
                body += "</tr>";
                //var examples = _db.ExampleTbls.Where(q => q.IdDicTbl == item.Id).ToList();
                //foreach (var example in examples)
                //{
                //    body += "<tr style='background-color:" + (stylecondition == 0 ? "gray" : "white") + "'>";
                //    body += "<td colspan=2 style='border:1px solid'>" + example.Example + "</td>";
                //    body += "</tr>";
                //}
                i += 1;
            }
            body += "</table>";
            return body;
        }
    }
}
