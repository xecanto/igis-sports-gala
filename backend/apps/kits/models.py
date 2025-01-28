from django.db import models
from apps.teams.models import Team

class Kit(models.Model):
    team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='kits')
    size = models.CharField(max_length=10)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    delivery_status = models.CharField(max_length=20, choices=[('ordered', 'Ordered'), ('delivered', 'Delivered')], default='ordered')
    order_date = models.DateTimeField(auto_now_add=True)
    delivery_date = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"{self.team.name} - {self.size} - {self.delivery_status}"
