using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domains
{
    public abstract class BaseEntity<T>
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public T Id { get; set; }

        public DateTime? Created { get; set; } = DateTime.Now;
        [MaxLength(8)]
        public string CreatedShamsy { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? LastModified { get; set; } = DateTime.Now;
        [MaxLength(8)]
        public string LastModifiedShamsy { get; set; }

        public string LastModifiedBy { get; set; }
        public bool? IsDeleted { get; set; } = false;
        public string Time { get; set; }
        public string Title { get; set; }
       
    }
    public abstract class BaseEntity : BaseEntity<int>
    {

    }
    //public class BaseEntityConfiguration : IEntityTypeConfiguration<BaseEntity>
    //{
    //    public void Configure(EntityTypeBuilder<BaseEntity> builder)
    //    {

    //        builder.Property(x => x.Title).HasMaxLength(256);
    //    }
    //}
}
