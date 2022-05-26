using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationLayer.Dto.Dictionary
{
   public class TranslateWordByWordDto
    {
        public string[] ExampleWords { get; set; }
        public List<Domains.EnglishWord> EnglishWords { get; set; }
    }
}
