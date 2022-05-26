﻿using System;
using System.Collections.Generic;

namespace ManageYourSelf.Models
{
    public partial class Planning
    {
        public int Id { get; set; }
        public bool IsExecuted { get; set; }
        public int Order { get; set; }
        public string? Date { get; set; }
        public int CourseId { get; set; }
        public DateTime? Created { get; set; }
        public string? CreatedShamsy { get; set; }
        public string? CreatedBy { get; set; }
        public DateTime? LastModified { get; set; }
        public string? LastModifiedShamsy { get; set; }
        public string? LastModifiedBy { get; set; }
        public bool? IsDeleted { get; set; }
        public string? Time { get; set; }
        public string Title { get; set; } = null!;
        public int OrderSet { get; set; }

        public virtual Course Course { get; set; } = null!;
    }
}